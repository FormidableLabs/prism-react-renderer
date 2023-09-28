export const sampleCode = {
  ["TypeScript with React"]: {
    language: "tsx",
    code: `
import React from 'react';

interface GroceryItemProps {
  item: {
    name: string;
    price: number;
    quantity: number;
  }
}

const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default GroceryItem;
    `,
  },

  ["JavaScript"]: {
    language: "javascript",
    code: `
const GroceryItem = new Proxy({}, {
  set(target, prop, value) {
    if (prop === 'name' && typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (prop === 'price' && typeof value !== 'number') {
      throw new TypeError('Price must be a number');
    }
    if (prop === 'quantity' && typeof value !== 'number') {
      throw new TypeError('Quantity must be a number');
    }
    target[prop] = value;
    return true;
  }
});
    `,
  },

  ["Objective-C"]: {
    language: "objectivec",
    code: `
@interface GroceryItem : NSObject

@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) float price;
@property (nonatomic, assign) NSInteger quantity;

- (instancetype) initWithName: (NSString *)name 
                        price: (float)price 
                     quantity: (NSInteger)quantity;

@end

@implementation GroceryItem

- (instancetype) initWithName: (NSString *)name 
                        price: (float)price 
                     quantity: (NSInteger)quantity {
    self = [super init];
    if (self) {
        _name = name;
        _price = price;
        _quantity = quantity;
    }
    return self;
}

@end
    `,
  },

  ["HTML"]: {
    language: "html",
    code: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Formidable</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
    `,
  },

  ["AppleScript"]: {
    language: "applescript",
    code: `
display alert "Do you wish to buy groceries?" buttons {"No", "Yes"}
set theAnswer to button returned of the result
if theAnswer is "Yes" then
  beep 5
end if
    `,
  },

  ["Python"]: {
    language: "python",
    code: `
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

clf = DecisionTreeClassifier(random_state=42)
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)
print(f"Accuracy: {accuracy}")
print("Classification Report:\\n", report)
print("Feature Importances:", clf.feature_importances_)
    `,
  },

  ["Rust"]: {
    language: "rust",
    code: `
use serde::{Deserialize, Serialize};
use reqwest::Error as ReqwestError;

#[derive(Debug, Serialize, Deserialize)]
struct GroceryItem {
    name: String,
    price: f32,
    quantity: i32,
}

impl GroceryItem {
    async fn fetch_all() -> Result<Vec<GroceryItem>, ReqwestError> {
        let response = reqwest::get("https://example.com/grocery_items")
            .await?
            .json::<Vec<GroceryItem>>()
            .await?;
        Ok(response)
    }

    async fn fetch_by_name(name: &str) -> Result<GroceryItem, ReqwestError> {
        let response = reqwest::get(&format!("https://example.com/grocery_items/{}", name))
            .await?
            .json::<GroceryItem>()
            .await?;
        Ok(response)
    }

    async fn create(&self) -> Result<(), ReqwestError> {
        let client = reqwest::Client::new();
        let response = client.post("https://example.com/grocery_items")
            .json(self)
            .send()
            .await?;
        if !response.status().is_success() {
            return Err(ReqwestError::from(response.status()));
        }
        Ok(())
    }

    async fn update(&self, name: &str) -> Result<(), ReqwestError> {
        let client = reqwest::Client::new();
        let response = client.put(&format!("https://example.com/grocery_items/{}", name))
            .json(self)
            .send()
            .await?;
        if !response.status().is_success() {
            return Err(ReqwestError::from(response.status()));
        }
        Ok(())
    }

    async fn delete(name: &str) -> Result<(), ReqwestError> {
        let client = reqwest::Client::new();
        let response = client.delete(&format!("https://example.com/grocery_items/{}", name))
            .send()
            .await?;
        if !response.status().is_success() {
            return Err(ReqwestError::from(response.status()));
        }
        Ok(())
    }
}
    `,
  },
}
