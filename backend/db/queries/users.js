const db = require('../connection');
const { tagsToString, stepsToString } = require('../../lib/helper');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUser = (email) => {
  const queryText = 'SELECT id, password_hash FROM users WHERE email = $1;'

  return db.query(queryText, [email])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });

}

const getSavedRecipes = (userId) => {
  const queryText = 'SELECT * FROM recipes WHERE saved_by = $1;';
  return db.query(queryText, [userId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

const addRecipe = (userId, recipeObj) => {
  // Add a new recipe entry with user_id
  const { title, tags, steps } = recipeObj;
  // title is string, tags is array with strings, steps is array with strings

  const stringifyTags = tagsToString(tags);
  const stringifySteps = stepsToString(steps);

  const queryText = 'INSERT INTO recipes (saved_by, title, tags, steps) VALUES ($1, $2, $3, $4) RETURNING id;'
  return db.query(queryText, [userId, title, stringifyTags, stringifySteps])
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
    throw err;
  });
}

const addRecipeIngredient = (recipeId, ingredientObj) => {
  const { id, quantity, units } = ingredientObj;

  const queryText = 'INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, units) VALUES ($1 ,$2, $3 ,$4) RETURNING *;'

  return db.query(queryText, [recipeId, id, quantity, units])
    .then((data) => {
      return data.rows[0];
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
}

const deleteRecipe = (userId, recipeId) => {
  const queryText = `
    DELETE FROM recipes
    WHERE saved_by = $1
    AND id = $2;
  `;
  return db.query(queryText, [userId, recipeId])
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

const getRecipeIngredients = (recipeId) => {
  const queryText = 'SELECT  i.name,  ri.quantity,  ri.units FROM  ingredients i JOIN  recipe_ingredients ri ON i.id = ri.ingredient_id WHERE ri.recipe_id = $1;';
  return db.query(queryText, [recipeId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
}

const getIngredients = (userId) => {
  // Get a list of all ingredients belonging to userId
  const queryText = `
  SELECT * FROM ingredients
  WHERE user_id = $1;
  `;

  console.log("Querying ingredients for", userId)
  return db.query(queryText, [userId])
    .then(data => data.rows)
    // .then((data) => console.log(data))
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

const deleteIngredient = (userId, ingredientId) => {
  // Delete saved ingredient from users ingredients list
  const queryText = `
  DELETE FROM ingredients
  WHERE user_id = $1
  AND id = $2;
  `;
  return db.query(queryText, [userId, ingredientId])
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

const addIngredient = (userId, ingredient) => {
  // Add a new ingredient to the users saved list
  const queryText = `
  INSERT INTO ingredients (user_id, name)
  VALUES ($1, $2);
  `;
  return db.query(queryText, [userId, ingredient.name])
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

module.exports = {
  getSavedRecipes,
  getRecipeIngredients,
  getIngredients,
  getUser,
  deleteIngredient,
  addIngredient,
  addRecipe,
  addRecipeIngredient,
  deleteRecipe
};
