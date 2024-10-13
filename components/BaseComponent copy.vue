<template>
  <component
    :is="getComponentTag(component.type)"
    v-bind="component.attributes"
    :style="convertToUnitString(component.styles)"
  >
    <template v-if="hasChildren">
      <BaseComponent
        v-for="child in component.children"
        :key="child.id"
        :component="child"
      />
    </template>
    <template v-else-if="hasText">
      {{ component.text }}
    </template>
  </component>
</template>

<script setup>
import {
  Row,
  Column,
  Link,
  Img,
  Section,
  Text,
  Button,
  Heading,
  Hr,
} from '@vue-email/components';

const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});

const hasChildren = computed(() => {
  return (
    Array.isArray(props.component.children) && props.component.children?.length > 0
  );
});

const hasText = computed(() => {
  return props.component.text;
});

const getComponentTag = (type) => {
  switch (type) {
    case 'Section':
      return Section;
    case 'Row':
    case 'ResponsiveRow':
      return Row;
    case 'Column':
    case 'ResponsiveColumn':
      return Column;
    case 'Link':
      return Link;
    case 'Img':
      return Img;
    case 'Text':
      return Text;
    case 'Heading':
      return Heading;
    case 'Button':
      return Button;
    case 'Hr':
      return Hr;
    case 'Table':
      return 'table';
    case 'TableRow':
      return 'tr';
    case 'TableHeader':
      return 'th';
    case 'TableData':
      return 'td';
    default:
      return 'div';
  }
};

function convertToUnitString(styles) {
  if
  const unitProperties = [
    'width', 'height', 'top', 'bottom', 'left', 'right', 'fontSize',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
    'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'borderWidth', 'borderRadius', 'lineHeight', 'letterSpacing'
  ];

  const updatedStyles = {};

  for (let [key, value] of Object.entries(styles)) {
    // Check if the key is in the list and value is a number
    if (unitProperties.includes(key) && typeof value === 'number') {
      updatedStyles[key] = `${value}px`;
    } else {
      updatedStyles[key] = value; // Keep it as is for other properties
    }
  }

  return updatedStyles;
}
</script>
