This project contains role based authentication .
We used only basic logic for maintaining roles using sessionStorage.

1)For Server Side :-
 1)INSTALL NODE AND CHECK ITS VERSION node -v
 2)npm --version
 3)create a js file and write some code and run it using node myapp.js

 For Express :- 
1)create a folder named like (restful-api)
2)npm init
3)npm install express --save
4)npm install cors --save
5)npm install nodemone --save
6)npm install body-parser --save
7)npm install mysql --save
8)create a js file and write server creation code into it


2) For Backend :
	1)mysql should be there in your system
	2)create a table named registrationwithroles
3)	
| Field           | Type        | Null | Key | Default | Extra          |
+-----------------+-------------+------+-----+---------+----------------+
| user_reg_id     | int         | NO   | PRI | NULL    | auto_increment |
| user_email      | varchar(30) | NO   |     | NULL    |                |
| user_password   | varchar(30) | NO   |     | NULL    |                |
| user_repassword | varchar(30) | NO   |     | NULL    |                |
| user_role       | varchar(30) | YES  |     | NULL    |                |
4)run js file with node [filename].js command	

3)For FrontEnd
	1)Create a project in angular with any name
	2)paste src folder into that project
	3)install required libraries if find any error (cause node_modules named folder is not uploaded ,so you will have to do some 		installatioin into project like for bootstrap and other libraries)


** Here two roles are there 1)Admin 2)User , so before running project you have insert some data in table with roles specified ,then you can login ,if you login by Admin role then Admin link will be visible , else user link visible if login by user role.


+-------------+-----------------+---------------+-----------------+-----------+
| user_reg_id | user_email      | user_password | user_repassword | user_role |
+-------------+-----------------+---------------+-----------------+-----------+
|           1 | ravi@gmail.com  | ravi@123      | ravi@123        | user      |
|           2 | admin@gmail.com | admin@123     | admin@123       | admin     |
|           3 | rahul@gmail.com | rahul@123     | rahul@123       | NULL      |
|           4 | sunil@gmail.com | sunil@123     | sunil@123       | user      |
+-------------+-----------------+---------------+-----------------+-----------+



**you will not be able to provide any role , only user has the right to register and he/she will get 'user' role automatically.











 


