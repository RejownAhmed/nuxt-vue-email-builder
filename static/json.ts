export const oneProduct = {
  id: "OneProduct",
  label: "One Product",
  template: {
    section: [
      {
        id: "Section1",
        label: "Container 1",
        attributes: {
          style: {
            marginTop: '16px',
            marginBottom: '16px',
          },
        },
      },
      {
        id: "Section2",
        label: "Container 2",
        attributes: {
          style: {
            marginTop: '32px',
            textAlign: "center",
          },
        },
      },
    ],
    image: [
      {
        id: "Image1",
        label: "Product Image",
        attributes: {
          src: "https://react.email/static/braun-collection.jpg",
          alt: "Braun Collection",
          height: 320,
          style: {
            width: "100%",
            height: "320px",
            borderRadius: '12px',
            objectFit: "cover",
          },
        },
      },
    ],
    text: [
      {
        id: "Text1",
        label: "Sub title",
        value: "Classic Watches",
        attributes: {
          style: {
            marginTop: '16px',
            fontSize: '18px',
            lineHeight: "28px",
            fontWeight: 600,
            color: "rgb(79,70,229)",
          },
        },
      },
      {
        id: "Text2",
        label: "Description",
        value:
          "Dieter Rams' work has an outstanding quality which distinguishes it from the vast majority of industrial design of the entire 20th Century.",
        attributes: {
          style: {
            marginTop: '8px',
            fontSize: '16px',
            lineHeight: "24px",
            color: "rgb(107,114,128)",
          },
        }
      },
      {
        id: "Text3",
        label: "Price",
        value: "$210.00",
        attributes: {
          style: {
            fontSize: '16px',
            lineHeight: "24px",
            fontWeight: 600,
            color: "rgb(17,24,39)",
          },
        }
      },
    ],
    heading: [
      {
        id: "Heading1",
        label: "Title",
        value: "Elegant Comfort",
        as: "h1",
        attributes: {
          style: {
            fontSize: '36px',
            lineHeight: "40px",
            fontWeight: 600,
            letterSpacing: '0.4px',
            color: "rgb(17,24,39)",
          },
        }
      },
    ],
    button: [
      {
        id: "Button1",
        label: "Buy Now Button",
        href: "https://react.email",
        value: "Buy now",
        attributes: {
          style: {
            marginTop: '16px',
            borderRadius: '8px',
            backgroundColor: "rgb(79,70,229)",
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            fontWeight: 600,
            color: "rgb(255,255,255)",
          },
        }
      },
    ],
  },
};
