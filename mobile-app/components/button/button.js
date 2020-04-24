import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Button(props) {
  const { onPress, disabled, title } = props;
  if (disabled) {
    return (
      <View
      >
        <Text style={styles.buttonDisabledCarbon}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text
        style={styles.buttonPrimaryCarbon} 
      >{title}</Text>
    </TouchableOpacity>
  );
}

const buttonCarbon = {
  textAlignVertical: "center",
  textAlign: "center",
  textDecoration: "none",
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  fontSize: "0.875rem",
  fontSize: "var(--cds-body-short-01-font-size, 0.875rem)",
  fontWeight: "400",
  fontWeight: "var(--cds-body-short-01-font-weight, 400)",
  lineHeight: "1.125rem",
  lineHeight: "var(--cds-body-short-01-line-height, 1.125rem)",
  letterSpacing: "0.16px",
  letterSpacing: "var(--cds-body-short-01-letter-spacing, 0.16px)",
  cursor: "pointer",
  verticalAlign: "top",
  flexShrink: "0",
  minHeight: "3rem",
  borderRadius: "0",
  transition: "all 70ms cubic-bezier(0, 0, 0.38, 0.9)",
  outline: "none",
  position: "relative",
  margin: "0",
  minHeight: '2.5rem',
  paddingTop: 'calc(0.675rem - 3px)',
  paddingRight: '60px',
  paddingBottom: 'calc(0.675rem - 3px)',
  paddingLeft: '12px',
};

const buttonPrimaryCarbon = {
  ...buttonCarbon,
  backgroundColor: "#0f62fe",
  backgroundColor: "var(--cds-interactive-01, #0f62fe)",
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "transparent",
  color: "#ffffff",
  color: "var(--cds-text-04, #ffffff)",
};

const buttonDisabledCarbon = {
  ...buttonCarbon,
  cursor: 'not-allowed',
  color: '#8d8d8d',
  color: 'var(--cds-disabled-03, #8d8d8d)',
  backgroundColor: '#c6c6c6',
  backgroundColor: 'var(--cds-disabled-02, #c6c6c6)',
  borderColor: '#c6c6c6',
  borderColor: 'var(--cds-disabled-02, #c6c6c6)',
};

const styles = StyleSheet.create({
  buttonPrimaryCarbon,
  buttonDisabledCarbon,
});
