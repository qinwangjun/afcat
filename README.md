### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### React-cookie用法

1、下载依赖
cnpm install react-cookies --save-dev

2、引入
import cookie from 'react-cookies'

3、存
cookie.save('userId', "123")；

4、取
cookie.load('userId')

5、删
cookie.remove('userId')