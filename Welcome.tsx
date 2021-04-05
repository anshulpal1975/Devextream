import React from "react";

import ODataStore from "devextreme/data/odata/store";

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from "devextreme-react/data-grid";
import Databind from "../Databinding/Databind";
import styled from "styled-components";
// import DiscountCell from './DiscountCell.js';

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  color: green;
`;

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
  store: new ODataStore({
    url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
    beforeSend: function (request) {
      request.params.startDate = "2020-05-10";
      request.params.endDate = "2020-05-15";
    },
  }),
};

class Welcome extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <>
        <Title>
          <h2>Data grid</h2>
        </Title>
        <DataGrid
          dataSource={dataSourceOptions}
          allowColumnReordering={true}
          showBorders={true}
          onContentReady={this.onContentReady}
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Grouping autoExpandAll={false} />

          <Column dataField="Product" groupIndex={0} />
          <Column
            dataField="Amount"
            caption="Sale Amount"
            dataType="number"
            format="currency"
            alignment="right"
          />
          <Column
            dataField="Discount"
            caption="Discount %"
            dataType="number"
            format="percent"
            alignment="right"
            allowGrouping={false}
            //   cellRender={DiscountCell}
            cssClass="bullet"
          />
          <Column dataField="SaleDate" dataType="date" />
          <Column dataField="Region" dataType="string" />
          <Column dataField="Sector" dataType="string" />
          <Column dataField="Channel" dataType="string" />
          <Column dataField="Customer" dataType="string" width={150} />

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>

        <Databind />
      </>
    );
  }

  onContentReady(e: any) {}
}

export default Welcome;
