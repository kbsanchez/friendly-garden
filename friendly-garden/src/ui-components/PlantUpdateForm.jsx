/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Plant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PlantUpdateForm(props) {
  const {
    id: idProp,
    plant: plantModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    image: "",
    type: "",
    bestFriends: [],
    allies: [],
    enemies: [],
    notes: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [type, setType] = React.useState(initialValues.type);
  const [bestFriends, setBestFriends] = React.useState(
    initialValues.bestFriends
  );
  const [allies, setAllies] = React.useState(initialValues.allies);
  const [enemies, setEnemies] = React.useState(initialValues.enemies);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = plantRecord
      ? { ...initialValues, ...plantRecord }
      : initialValues;
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setType(cleanValues.type);
    setBestFriends(cleanValues.bestFriends ?? []);
    setCurrentBestFriendsValue("");
    setAllies(cleanValues.allies ?? []);
    setCurrentAlliesValue("");
    setEnemies(cleanValues.enemies ?? []);
    setCurrentEnemiesValue("");
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [plantRecord, setPlantRecord] = React.useState(plantModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Plant, idProp)
        : plantModelProp;
      setPlantRecord(record);
    };
    queryData();
  }, [idProp, plantModelProp]);
  React.useEffect(resetStateValues, [plantRecord]);
  const [currentBestFriendsValue, setCurrentBestFriendsValue] =
    React.useState("");
  const bestFriendsRef = React.createRef();
  const [currentAlliesValue, setCurrentAlliesValue] = React.useState("");
  const alliesRef = React.createRef();
  const [currentEnemiesValue, setCurrentEnemiesValue] = React.useState("");
  const enemiesRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    image: [],
    type: [],
    bestFriends: [],
    allies: [],
    enemies: [],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          image,
          type,
          bestFriends,
          allies,
          enemies,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Plant.copyOf(plantRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              image,
              type,
              bestFriends,
              allies,
              enemies,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image: value,
              type,
              bestFriends,
              allies,
              enemies,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              type: value,
              bestFriends,
              allies,
              enemies,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              image,
              type,
              bestFriends: values,
              allies,
              enemies,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.bestFriends ?? values;
          }
          setBestFriends(values);
          setCurrentBestFriendsValue("");
        }}
        currentFieldValue={currentBestFriendsValue}
        label={"Best friends"}
        items={bestFriends}
        hasError={errors?.bestFriends?.hasError}
        errorMessage={errors?.bestFriends?.errorMessage}
        setFieldValue={setCurrentBestFriendsValue}
        inputFieldRef={bestFriendsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Best friends"
          isRequired={false}
          isReadOnly={false}
          value={currentBestFriendsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.bestFriends?.hasError) {
              runValidationTasks("bestFriends", value);
            }
            setCurrentBestFriendsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("bestFriends", currentBestFriendsValue)
          }
          errorMessage={errors.bestFriends?.errorMessage}
          hasError={errors.bestFriends?.hasError}
          ref={bestFriendsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "bestFriends")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              image,
              type,
              bestFriends,
              allies: values,
              enemies,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.allies ?? values;
          }
          setAllies(values);
          setCurrentAlliesValue("");
        }}
        currentFieldValue={currentAlliesValue}
        label={"Allies"}
        items={allies}
        hasError={errors?.allies?.hasError}
        errorMessage={errors?.allies?.errorMessage}
        setFieldValue={setCurrentAlliesValue}
        inputFieldRef={alliesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Allies"
          isRequired={false}
          isReadOnly={false}
          value={currentAlliesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.allies?.hasError) {
              runValidationTasks("allies", value);
            }
            setCurrentAlliesValue(value);
          }}
          onBlur={() => runValidationTasks("allies", currentAlliesValue)}
          errorMessage={errors.allies?.errorMessage}
          hasError={errors.allies?.hasError}
          ref={alliesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "allies")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              image,
              type,
              bestFriends,
              allies,
              enemies: values,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.enemies ?? values;
          }
          setEnemies(values);
          setCurrentEnemiesValue("");
        }}
        currentFieldValue={currentEnemiesValue}
        label={"Enemies"}
        items={enemies}
        hasError={errors?.enemies?.hasError}
        errorMessage={errors?.enemies?.errorMessage}
        setFieldValue={setCurrentEnemiesValue}
        inputFieldRef={enemiesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Enemies"
          isRequired={false}
          isReadOnly={false}
          value={currentEnemiesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.enemies?.hasError) {
              runValidationTasks("enemies", value);
            }
            setCurrentEnemiesValue(value);
          }}
          onBlur={() => runValidationTasks("enemies", currentEnemiesValue)}
          errorMessage={errors.enemies?.errorMessage}
          hasError={errors.enemies?.hasError}
          ref={enemiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "enemies")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              type,
              bestFriends,
              allies,
              enemies,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || plantModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || plantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
