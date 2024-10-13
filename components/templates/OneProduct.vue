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
} from "@vue-email/components";

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
});

const getElementData = (type, id) => {
  const data = props.template[type];
  return data.find((element) => element.id === id);
};
</script>
<template>
  <Section v-bind="getElementData('section', 'Section1').attributes">
    <Img
      v-bind="getElementData('image', 'Image1').attributes"
    />
    <Section v-bind="getElementData('section', 'Section2').attributes">
      <Text v-bind="getElementData('text', 'Text1').attributes">
        {{ getElementData("text", "Text1").value }}
      </Text>
      <Heading
        :as="getElementData('heading', 'Heading1').as"
        v-bind="getElementData('heading', 'Heading1').attributes"
      >
        {{ getElementData("heading", "Heading1").value }}
      </Heading>
      <Text v-bind="getElementData('text', 'Text2').attributes">
        {{ getElementData("text", "Text2").value }}
      </Text>
      <Text v-bind="getElementData('text', 'Text3').attributes">
        {{ getElementData("text", "Text3").value }}
      </Text>
      <Button v-bind="getElementData('button', 'Button1').attributes">
        {{ getElementData("button", "Button1").value }}
      </Button>
    </Section>
  </Section>
</template>
