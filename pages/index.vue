<script setup>
import { Body, Head, Html } from '@vue-email/components';

const timingProductsTemplate2 = {
  id: 'component_009',
  type: 'Section',
  styles: {
    marginTop: 16,
    marginBottom: 16,
  },
  children: [
    {
      id: 'section_001',
      type: 'Section',
      children: [
        {
          id: 'row_001',
          type: 'Row',
          children: [
            {
              id: 'text_001',
              type: 'Text',
              styles: {
                margin: '0px',
                fontSize: 20,
                lineHeight: '28px',
                fontWeight: 600,
                color: 'rgb(17,24,39)',
              },
              text: 'Timing Products',
            },
            {
              id: 'text_002',
              type: 'Text',
              styles: {
                marginTop: 8,
                fontSize: 16,
                lineHeight: '24px',
                color: 'rgb(107,114,128)',
              },
              text: 'Dieter Rams consistently implemented his design principles over the course of over three decades as the Braun design leader.',
            },
          ],
        },
        {
          id: 'row_002',
          type: 'Row',
          styles: { marginTop: 16 },
          children: [
            {
              id: 'column_001',
              type: 'Column',
              styles: { width: '50%', paddingRight: 8 },
              attributes: { align: 'left', colSpan: 1 },
              children: [
                {
                  id: 'img_001',
                  type: 'Img',
                  attributes: {
                    alt: 'Braun Wall Clock',
                    height: 250,
                    src: 'https://react.email/static/braun-wall-clock.jpg',
                  },
                  styles: {
                    width: '100%',
                    borderRadius: 8,
                    objectFit: 'cover',
                  },
                },
                {
                  id: 'text_003',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 24,
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: '28px',
                    color: 'rgb(17,24,39)',
                  },
                  text: 'Wall Clock',
                },
                {
                  id: 'text_004',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 16,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: 'rgb(107,114,128)',
                  },
                  text: 'Easy to read dial layout.',
                },
                {
                  id: 'text_005',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: '$45.00',
                },
                {
                  id: 'button_001',
                  type: 'Button',
                  attributes: { href: 'https://react.email' },
                  styles: {
                    marginTop: 16,
                    borderRadius: 8,
                    backgroundColor: "rgb(79,70,229)",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    fontWeight: 600,
                    color: "rgb(255,255,255)",
                  },
                  text: 'Buy',
                },
              ],
            },
            {
              id: 'column_002',
              type: 'Column',
              styles: { width: '50%', paddingLeft: 8 },
              attributes: { align: 'left', colSpan: 1 },
              children: [
                {
                  id: 'img_002',
                  type: 'Img',
                  attributes: {
                    alt: 'Braun Wireless Alarm',
                    height: 250,
                    src: 'https://react.email/static/braun-wireless-alarm.jpg',
                  },
                  styles: {
                    width: '100%',
                    borderRadius: 8,
                    objectFit: 'cover',
                  },
                },
                {
                  id: 'text_006',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 24,
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: 'Wireless Alarm',
                },
                {
                  id: 'text_007',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 16,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: 'rgb(107,114,128)',
                  },
                  text: 'Designed with a focus on function.',
                },
                {
                  id: 'text_008',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: '$50.00',
                },
                {
                  id: 'button_002',
                  type: 'Button',
                  attributes: { href: 'https://react.email' },
                  styles: {
                    marginTop: 16,
                    borderRadius: 8,
                    backgroundColor: 'rgb(79,70,229)',
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    fontWeight: 600,
                    color: 'rgb(255,255,255)',
                  },
                  text: 'Buy',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hr_001',
      type: 'Hr',
      styles: {
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: 24,
        marginBottom: 24,
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(229,231,235)',
      },
    },
    {
      id: 'section_002',
      type: 'Section',
      children: [
        {
          id: 'row_003',
          type: 'Row',
          children: [
            {
              id: 'column_003',
              type: 'Column',
              styles: { width: '50%', paddingRight: 8 },
              attributes: { align: 'left', colSpan: 1 },
              children: [
                {
                  id: 'img_003',
                  type: 'Img',
                  attributes: {
                    alt: 'Braun Classic Watch',
                    height: 250,
                    src: 'https://react.email/static/braun-classic-watch.jpg',
                  },
                  styles: {
                    width: '100%',
                    borderRadius: 8,
                    objectFit: 'cover',
                  },
                },
                {
                  id: 'text_009',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 24,
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: 'Classic Watch',
                },
                {
                  id: 'text_010',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 16,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: 'rgb(107,114,128)',
                  },
                  text: 'Functional, classic, and built to last.',
                },
                {
                  id: 'text_011',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: '$210.00',
                },
                {
                  id: 'button_003',
                  type: 'Button',
                  attributes: { href: 'https://react.email' },
                  styles: {
                    marginTop: 16,
                    borderRadius: 8,
                    backgroundColor: 'rgb(79,70,229)',
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    fontWeight: 600,
                    color: 'rgb(255,255,255)',
                  },
                  text: 'Buy',
                },
              ],
            },
            {
              id: 'column_004',
              type: 'Column',
              styles: { width: '50%', paddingLeft: 8 },
              attributes: { align: 'left', colSpan: 1 },
              children: [
                {
                  id: 'img_004',
                  type: 'Img',
                  attributes: {
                    alt: 'Braun Analogue Clock',
                    height: 250,
                    src: 'https://react.email/static/braun-analogue-clock.jpg',
                  },
                  styles: {
                    width: '100%',
                    borderRadius: 8,
                    objectFit: 'cover',
                  },
                },
                {
                  id: 'text_012',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 24,
                    fontSize: 20,
                    lineHeight: '28px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: 'Analogue Clock',
                },
                {
                  id: 'text_013',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 16,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: 'rgb(107,114,128)',
                  },
                  text: 'Thoughtful and simply designed.',
                },
                {
                  id: 'text_014',
                  type: 'Text',
                  styles: {
                    margin: '0px',
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 600,
                    color: 'rgb(17,24,39)',
                  },
                  text: '$40.00',
                },
                {
                  id: 'button_004',
                  type: 'Button',
                  attributes: { href: 'https://react.email' },
                  styles: {
                    marginTop: 16,
                    borderRadius: 8,
                    backgroundColor: 'rgb(79,70,229)',
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                    fontWeight: 600,
                    color: 'rgb(255,255,255)',
                  },
                  text: 'Buy',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
</script>

<template>
  <div style="background-color: aliceblue;">
    <Html>
    <Head />
    <Body>
      <div style="max-width: 37.5em; margin: 0 auto; padding: 1rem 0; min-height: 100vh;">
        <BaseComponent :component="timingProductsTemplate2" />
      </div>
    </Body>

    </Html>

  </div>
</template>
