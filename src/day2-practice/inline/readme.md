## Instructions

1. This is the example of using inlince CSS
```js
 return (
    <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>ToDo</h2>
      <div>
        <Input onChange={this.handleChange} />
        <p>{this.state.error}</p>
        <ToDoList value={this.state.display} />
      </div>
    </div>
  );
```