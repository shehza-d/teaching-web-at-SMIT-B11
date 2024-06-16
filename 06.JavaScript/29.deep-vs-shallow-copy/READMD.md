# [Video](https://youtu.be/4Ej0LwjCDZQ?si=5ntaTItekb7jEv_h)

### Shallow Copy

A shallow copy of an object is a copy whose properties share the same references (or memory addresses) as those in the original object. This means that if the original object contains references to other objects, the shallow copy will contain references to the same objects, rather than copies of those objects.

#### Example of Shallow Copy

```javascript
// Original object
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);

// Shallow copy using spread operator
const shallowCopy2 = { ...original };

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Elsewhere";

// This will also change the city in the original object
console.log(original.address.city); // Output: "Elsewhere"
```

In the above example, changing `shallowCopy.address.city` also changes `original.address.city` because both `shallowCopy` and `original` share the same reference to the `address` object.

### Deep Copy

A deep copy of an object is a copy that duplicates all nested objects, ensuring that no references are shared between the original and the copied object. This means that modifications to the nested objects in the copy will not affect the original object and vice versa.

#### Example of Deep Copy

To create a deep copy, you often need a custom function or a library because JavaScript does not provide a built-in method for deep copying.

1. **Using JSON.parse and JSON.stringify**

This method works for simple objects that do not contain functions, `undefined`, or other non-serializable values.

```javascript
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the nested object in the deep copy
deepCopy.address.city = "Elsewhere";

// The original object remains unchanged
console.log(original.address.city); // Output: "Wonderland"
```

2. **Using a Custom Function**

For more complex objects, you might need a custom deep copy function or use a library like Lodash.

```javascript
// Lodash library (you need to install it using npm or include via a CDN)
const _ = require("lodash");

const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

// Deep copy using Lodash
const deepCopy = _.cloneDeep(original);

// Modifying the nested object in the deep copy
deepCopy.address.city = "Elsewhere";

// The original object remains unchanged
console.log(original.address.city); // Output: "Wonderland"
```

### Summary

- **Shallow Copy**: Copies the object's properties, but nested objects are shared between the original and the copy. Modifications to nested objects in the copy affect the original object.
- **Deep Copy**: Creates a complete duplicate of the object, including all nested objects. Modifications to the copy do not affect the original object.

Understanding the difference between shallow and deep copies is crucial for managing data integrity and avoiding unintended side effects in your JavaScript applications.
