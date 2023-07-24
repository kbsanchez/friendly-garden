/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Plant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlantUpdateFormInputValues = {
    name?: string;
    image?: string;
    type?: string;
    bestFriends?: string[];
    allies?: string[];
    enemies?: string[];
    notes?: string;
};
export declare type PlantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    bestFriends?: ValidationFunction<string>;
    allies?: ValidationFunction<string>;
    enemies?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlantUpdateFormOverridesProps = {
    PlantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    bestFriends?: PrimitiveOverrideProps<TextFieldProps>;
    allies?: PrimitiveOverrideProps<TextFieldProps>;
    enemies?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlantUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plant?: Plant;
    onSubmit?: (fields: PlantUpdateFormInputValues) => PlantUpdateFormInputValues;
    onSuccess?: (fields: PlantUpdateFormInputValues) => void;
    onError?: (fields: PlantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlantUpdateFormInputValues) => PlantUpdateFormInputValues;
    onValidate?: PlantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlantUpdateForm(props: PlantUpdateFormProps): React.ReactElement;
