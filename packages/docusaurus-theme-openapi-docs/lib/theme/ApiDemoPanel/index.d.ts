import React from "react";
import { ApiItem } from "docusaurus-plugin-openapi-docs/src/types";
declare function ApiDemoPanel({ item, infoPath, }: {
    item: NonNullable<ApiItem>;
    infoPath: string;
}): React.JSX.Element;
export default ApiDemoPanel;
