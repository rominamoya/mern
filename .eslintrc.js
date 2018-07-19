module.exports = {
  "parser": "babel-eslint",
   "extends": "airbnb",
   "env": {
      "jest": true,
     "browser": true,
   },
   rules: {
    'react/forbid-prop-types': [0],
    "import/no-named-as-default": [0],
    "import/no-named-as-default-member": [0],
    "react/no-array-index-key": [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/label-has-for': [0],
    'no-underscore-dangle': [2, { "allow": [ "_id"]}]
  },
   "plugins": [
     "react"
  ]
};
