/// <reference types="react" />
import { Param } from "@theme/ApiDemoPanel/ParamOptions/slice";
export interface ParamProps {
    param: Param;
}
export default function ParamSelectFormItem({ param }: ParamProps): JSX.Element;
