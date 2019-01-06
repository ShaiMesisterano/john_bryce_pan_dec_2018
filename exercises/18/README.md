<h1>
    Node, TypeScript & MySQL
</h1>
<ol>
<li>
Implement the Recipes Application using TypeScript OOP style.<br>
<h2>For Example:</h2>
The following code:
<code><pre>
const recipeBook = new RecipeBook();
const cakeRecipe = new Recipe("Cake", ["Sugar", "Milk"], 45);
recipeBook.add(cakeRecipe);
</pre></code>
should add a new recipe to the MySQL database.<br>
</li>
<li>
Add the following methods to <code>RecipeBook</code>:
<ul>
<li>
add (returns an object with the new item)
</li>
<li>
update (returns an object with the previous and current states of the item which was updated)
</li>
<li>
remove (returns an object with the item which was removed)
</li>
<li>
getJSON (returns the data in JSON format)
</li>
<li>
getCSV (returns the data in CSV format)
</li>
</ul>
</li>
</ol>