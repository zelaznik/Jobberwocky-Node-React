import React from 'react';
import Table from './table/Table.jsx';
import TableStore from '../stores/TableStore.jsx';
import TableActions from '../actions/TableActions.jsx';

var MainContent = React.createClass({
    getInitialState() {
        return {table: TableStore.data()};
    },
    render() {
        return (
            <div className="container-fluid main-content">
                <div className="page-title text-align-center">
                    <h1 text-align="center">
                        Programs
                    </h1>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <Table {...this.state.table} />
                    </div>
                </div>
            </div>
        );
    },
    refresh() {
        this.setState( this.getInitialState() );
    },
    componentDidMount() {
        TableStore.addChangeListener(this.refresh);
    },
    componentWillUnmount() {
        TableStore.removeChangeListener(this.refresh);
    }
});


export default MainContent;