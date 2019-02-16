import React, { Component } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import isURL from 'validator/lib/isURL';


const pageSize = 25;

const formatDate = ts => DateTime.fromISO(ts).toFormat('yy.M.d').replace(/^0/, '');

export default class Linkdump extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: null,
      pages: null,
      total: null,
      page: 1,
      title: '',
      uri: '',
    };

    this.dumpLink = this.dumpLink.bind(this);
  }

  componentDidMount() {
    this.getLinks();
  }

  getLinks() {
    const { page } = this.state;

    axios.get('https://us-east1-saltiresable.cloudfunctions.net/links',
      { params: { page, pageSize } })
      .then(({ data: { links, pages, total } }) => this.setState({ links, pages, total }))
      .catch(console.error);
  }

  goToPage(page) {
    this.setState({ page }, () => this.getLinks());
  }

  dumpLink() {
    const { title, uri } = this.state;

    axios.post('https://us-east1-saltiresable.cloudfunctions.net/dump', { title, uri })
      .then(() => this.setState({ page: 1, title: '', uri: '' }, () => this.getLinks()))
      .catch(console.error);
  }

  render() {
    const { links, pages, total, page, title, uri } = this.state;

    const pager = [
      { label: '«', page: 1, hide: page === 1 },
      { label: '‹', page: page - 1, hide: page === 1 },
      { label: page, page },
      { label: '›', page: page + 1, hide: page === pages },
      { label: '»', page: pages, hide: page === pages },
    ];
    const first = (page - 1) * pageSize + 1;
    const last = Math.min(page * pageSize, total);

    return (
      <div className='Linkdump'>
        <form onSubmit={this.dumpLink}>
          <input
            type='text'
            placeholder='site name'
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type='text'
            placeholder='link'
            value={uri}
            onChange={e => this.setState({ uri: e.target.value })}
          />
          <button
            type='button'
            disabled={!title || !isURL(uri)}
            onClick={this.dumpLink}
          >
            dump
          </button>
        </form>

        <ul>
          {(links || []).map(link => (
            <li>
              <a href={link.uri} target='_blank' rel='noopener noreferrer'>
                <span className='link-date'>{formatDate(link.ts)}</span>
                <span className='link-title'>{link.title}</span>
                <span className='link-uri'>{link.uri}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className='linkdump-summary'>
          {!links && <p>loading...</p>}
          {links && !links.length && <p>no links to display.</p>}
          {links && links.length && <p>displaying links {first}–{last} of {total}.</p>}
        </div>

        <div className='pager'>
          {pager.map(({ page: pg, hide, label }) => (
            <button
              type='button'
              className={hide ? 'hide' : undefined}
              onClick={() => this.goToPage(pg)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
