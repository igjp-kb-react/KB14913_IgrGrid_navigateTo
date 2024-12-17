import { useRef } from "react";
import { IgrColumn, IgrGrid } from "@infragistics/igniteui-react-grids";
import { sampleData } from "./appData";
export const App = () => {
  // グリッドの参照を作成します
  const gridRef = useRef<IgrGrid>(null);
  // 最初のセルに移動する関数を作成します
  function OnGoToFirstCell() {
    if (gridRef.current) {
      const firstRowIndex = 0;
      gridRef.current.navigateTo(firstRowIndex, 0, () => {
        console.log("Go to the first cell");
      });
    }
  }
  // 最後のセルに移動する関数を作成します
  function OnGoToLastCell() {
    if (gridRef.current) {
      const lastRowIndex = sampleData.length - 1;
      const lastColumnIndex = gridRef.current.columns.length - 1;
      gridRef.current.navigateTo(lastRowIndex, lastColumnIndex, () => {
        console.log("Go to the last cell");
      });
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <div style={{ marginBottom: "8px", textAlign: "center", gap: "8px", display: "flex", justifyContent: "center" }}>
        <button onClick={OnGoToFirstCell}>Go to the first cell</button>
        <button onClick={OnGoToLastCell}>Go to the last cell</button>
      </div>
      <IgrGrid height="300px" ref={gridRef} data={sampleData} primaryKey="id" width="100%" style={{ "--ig-size": "var(--ig-size-small)" }}>
        <IgrColumn field="id" header="ID" />
        <IgrColumn field="name" header="Name" />
        <IgrColumn field="country" header="Country" />
        <IgrColumn field="age" header="Age" dataType="number" />
        <IgrColumn field="hireDate" header="Hire Date" dataType="date" />
        <IgrColumn field="department" header="Department" />
        <IgrColumn field="jobTitle" header="Job Title" />
      </IgrGrid>
    </div>
  );
};
