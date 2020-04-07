import React from "react";
import { Pie, yuan } from "ant-design-pro/lib/Charts";

const salesPieData = [
  {
    x: "a",
    y: 4544,
  },
  {
    x: "b",
    y: 3321,
  },
  {
    x: "c",
    y: 3113,
  },
  {
    x: "d",
    y: 2341,
  },
  {
    x: "e",
    y: 1231,
  },
  {
    x: "f",
    y: 1231,
  },
];

export default () => {
  return (
    <Pie
      hasLegend
      title="test2"
      subTitle="test1"
      total={() => (
        <span
          dangerouslySetInnerHTML={{
            __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
          }}
        />
      )}
      data={salesPieData}
      valueFormat={(val: any) => (
        <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />
      )}
      height={294}
    />
  );
};
