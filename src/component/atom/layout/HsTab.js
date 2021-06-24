import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Tabs} from "antd";
import Icons from "../../../assets/icons/Icons";
import HsCard from "../card/HsCard";
import styled from "styled-components";

const {TabPane} = Tabs;

const StyledTab = styled(Tabs)`
  .ant-tabs-tab {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const HsTab = props => {
    const {tabData, type, defaultActiveKey, loading, id} = props;
    const [active, setActive] = useState(defaultActiveKey);

    useEffect(() => {
        if(id === undefined || id === null) setActive(defaultActiveKey)
    }, [id])


    return (
        <StyledTab type={type} defaultActiveKey={defaultActiveKey}>
            {tabData.map((item, index) => (
                <TabPane tab={`${item.icon ? <Icons name={item.icon}/> : ''} ${item.title}`} key={index}>
                    <HsCard bordered={false} loading={loading}>
                        {item.element}
                    </HsCard>
                </TabPane>
            ))}
        </StyledTab>
    );
};

HsTab.defaultProps = {
    tabData: [],
    type: 'line',
    defaultActiveKey: 0,
    loading: false
}

HsTab.propTypes = {
    type: PropTypes.oneOf(['card', 'line', 'editable-card']),
    defaultActiveKey: PropTypes.number,
    tabData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            element: PropTypes.element,
            icon: PropTypes.string
        })
    ),
    loading: PropTypes.bool
};

export default HsTab;