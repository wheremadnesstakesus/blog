# Notes

## CSS Styling

### With Emotion

```
const primary = ({ appearance, theme }) =>
  appearance === 'primary' &&
  css`
    background-color: ${theme.colors.primary};
    color: white;
  `

const secondary = ({ appearance, theme }) =>
  appearance === 'secondary' &&
  css`
    background-color: ${theme.colors.secondary};
    color: red;
  `

const Button = styled.button`
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 2.0625rem 5rem;

  ${primary}
  ${secondary}
`
```
or
```
const Button = styled.button`
   border-radius: 0.5rem;
   cursor: pointer;
   padding: 2.0625rem 5rem;
   ${({ appearance, theme }) =>
     appearance === 'primary' &&
     css`
       background-color: ${theme.colors.primary};
       color: white;
     `}
 `
```


### With Style-components

Using `styled-system`

```
```
