import "./App.css";
import {
  Accordion,
  Card,
  Grid,
  Pagination,
  TextStyles,
} from "@cedcommerce/ounce-ui";

function App() {

  var x = 5;
  var x = 12;



  return (
    <>
      <Grid
        columns={[
          {
            dataIndex: "name",
            render: function noRefCheck() {},
            title: "Name",
            width: "20%",
          },
          {
            dataIndex: "gender",
            title: "Gender",
            width: "20%",
          },
          {
            dataIndex: "email",
            title: "Email",
          },
        ]}
        // loading
        onChange={function noRefCheck() {}}
        rowKey={function noRefCheck() {}}
      />
      <Pagination
        countPerPage={10}
        currentPage={1}
        onCountChange={function noRefCheck() {}}
        onEnter={function noRefCheck() {}}
        onNext={function noRefCheck() {}}
        onPrevious={function noRefCheck() {}}
        optionPerPage={[
          {
            label: "10",
            value: "10",
          },
          {
            label: "15",
            value: "15",
          },
          {
            label: "20",
            value: "20",
          },
          {
            label: "25",
            value: "25",
          },
          {
            label: "50",
            value: "50",
          },
        ]}
        totalitem={200}
      />
    </>
  );
}

export default App;
