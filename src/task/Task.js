import React, { Suspense } from 'react';
import {
    Button,
    Icon,
    Menu,
    Card,
    Dropdown,
    Drawer,
    Avatar,
    message,
    Form
} from 'antd';
import moment from 'moment';
import { connect } from 'dva';

const CardList = React.lazy(() => import('./CardList'));

// 空格组件
const Space = () => {
    return (
        <span style={{ margin: '0 10px' }}></span>
    );
};

class Task extends React.PureComponent {
    state = {
        visible: false,
        cardWidth: {
            width: '100%',
            height: '100vh',
        },
        radioChecked: 0,
        buttonType: 'day',
        taskChoice: null,
        showType: '四象限',
        showDate: moment().format('YYYY-MM-DD'),
    };

    render() {
        const { cardWidth, visible, buttonType, showType, radioChecked, showDate, } = this.state;
    }

    return() {
        <div>
            <Card
                headStyle={{ height: '65px' }}
                title={cardTitle}
                extra={cardExtra}
                style={cardWidth}
            >
                <Suspense fallback={null}>
                    {showType === '四象限' ?
                        <CardList
                            dataSource={task_level}
                            showDrawer={this.showDrawer}
                            finished={this.handleFinished} />
                        :
                        <TimelineList
                            dataSource={task}
                            showDrawer={this.showDrawer}
                            finished={this.handleFinished} />
                    }
                </Suspense>
            </Card>
        </div>
    }
}