const BlogPath = './data.json';
const fs = require('fs');
 
class Blog{
    getAll(){
        return this.readData();
    }
    getBlog(id){
        const blogss = this.readData();
        const blog = blogss.find(blog => blog.id === id)

        return blog;
    }
    addBlog(newBlog){
        const currentBlogs = this.readData();
        currentBlogs.unshift(newBlog) 
        this.storeData(currentBlogs);
    }
    readData(){
        let rawData = fs.readFileSync(BlogPath);
        let data = JSON.parse(rawData);
        
        return data;
    }
    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(path, data);
    }
}

module.exports = Blog