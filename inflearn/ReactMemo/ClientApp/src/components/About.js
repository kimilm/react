import React, { Component } from 'react';
import { SiteList } from './shared/site_list/SiteList';
import { TechList } from './shared/tech_list/TechList';

export class About extends Component {
    render() {
        const title = "정보.";
        const message = "안녕하세요 여기는 ReactMemo 사이트입니다. "
        return (
            <>
                <h2>{title}</h2>
                <h3>{message}</h3>

                <p>이 사이트는 React 학습을 위한 데모 사이트입니다.</p>
                <p>학습이 왼료된 후 현재 사이트가 만들어집니다.</p>

                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="thumbnail">
                            <img src="http://placeimg.com/640/480/any" className="img-fluid" />
                            <i>Photo by http://placeimg.com</i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="thumbnail">
                            <img src="http://unsplash.it/640/480/?random" className="img-fluid" />
                            <i>Photo by http://unsplash.it</i>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
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