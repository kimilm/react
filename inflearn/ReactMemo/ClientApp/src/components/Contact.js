import React, { Component } from "react";
import { ContactDetails } from "./contact_details/ContactDetails";
import { SiteList } from "./shared/site_list/SiteList";
import { TechList } from "./shared/tech_list/TechList";

export class Contact extends Component {
    render() {
        const title = "연락처.";
        const message = "안녕하세요 여기는 ReactMemo 사이트입니다. "
        return (
            <>
                <h2>{title}</h2>
                <h3>{message}</h3>

                <p>이 사이트는 React 학습을 위한 데모 사이트입니다.</p>
                <p>학습이 왼료된 후 현재 사이트가 만들어집니다.</p>

                <ContactDetails />

                <div className="alert alert-warning alert-dismissable mb-5">
                    <button type="button" className="close" dataDismiss="alert" areaHidden="true">x</button>
                    이 사이트 제작을 위한 모든 단계는 <strong>데브렉</strong>에서 동영상 강좌로 제공됩니다.
                    관심 있으신 분들은 <a href="http://devlec.com">데브렉 사이트</a>를 참조하시기 바랍니다.
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