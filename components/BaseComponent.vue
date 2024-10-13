<script setup>
const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});

// Dynamic Import (Import components on demand, so that all components do not load at once)
const components = {
  OneProduct: defineAsyncComponent(()=> import("./templates/OneProduct.vue"))
}

const getComponentTag = computed(()=> components[props.component?.id]);
</script>
<template>
  <div>
    <component
      :is="getComponentTag"
      :template="component.template"
    />
  </div>
</template>

