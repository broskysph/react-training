## Instructions

1. Create a CSS modules with some sample Error Message
```css
.error-message {
  color: red;
  font-size: 16px;
}
```
2. And you can use it like below
```js
import styles from './styles.css';
 
function Message() {
 return (
   <div className={styles.ErrorMessage}>I am an error message</div>
 );
}
```