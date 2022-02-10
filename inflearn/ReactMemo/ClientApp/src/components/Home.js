import React, { Component } from 'react';
import { SiteList } from './shared/site_list/SiteList';
import { TechList } from './shared/tech_list/TechList';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div>
          <h1>안녕하세요 리액트 앱</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3><i className="fa fa-wrench"></i>현재 사이트에서 사용된 기술 리스트</h3>
            <TechList />
          </div>
          <div className="col-md-6">
            <h3><i className="fa fa-sitemap"></i>현재 사이트와 관련된 추천 사이트</h3>
            <SiteList />
          </div>
        </div>
      </>
    );
  }
}
