import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const axwayDirectory = path.join(process.cwd(), 'posts/axway')
const azureDirectory = path.join(process.cwd(), 'posts/azure')
const cloudflareDirectory = path.join(process.cwd(), 'posts/cloudflare')
const githubDirectory = path.join(process.cwd(), 'posts/github')
const jenkinsDirectory = path.join(process.cwd(), 'posts/jenkins')
const netiqDirectory = path.join(process.cwd(), 'posts/netiq')
const sonarqubeDirectory = path.join(process.cwd(), 'posts/sonarqube')
const vmwareDirectory = path.join(process.cwd(), 'posts/vmware')
const miscellaneousDirectory = path.join(process.cwd(), 'posts/miscellaneous')

const axwayCategory = 'axway';
const azureCategory = 'azure';
const cloudflareCategory = 'cloudflare';
const githubCategory = 'github';
const jenkinsCategory = 'jenkins';
const netiqCategory = 'netiq';
const sonarqubeCategory = 'sonarqube';
const vmwareCategory = 'vmware';
const miscellaneousCategory = 'miscellaneous';

// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {
  // Get file names under each categories directory
  const axwayFileNames = fs.readdirSync(axwayDirectory)
  const azureFileNames = fs.readdirSync(azureDirectory)
  const cloudflareFileNames = fs.readdirSync(cloudflareDirectory)
  const githubFileNames = fs.readdirSync(githubDirectory)
  const jenkinsFileNames = fs.readdirSync(jenkinsDirectory)
  const netiqFileNames = fs.readdirSync(netiqDirectory)
  const sonarqubeFileNames = fs.readdirSync(sonarqubeDirectory)
  const vmwareFileNames = fs.readdirSync(vmwareDirectory)
  const miscellaneousFileNames = fs.readdirSync(miscellaneousDirectory)

  // Get data from axway files
  const axwayFilesData = axwayFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(axwayDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'axway'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from azure files
  const azureFilesData = azureFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(azureDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'azure'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from cloudflare files
  const cloudflareFilesData = cloudflareFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(cloudflareDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'cloudflare'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from github files
  const githubFilesData = githubFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'github'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })
  // Get data from jenkins files
  const jenkinsFilesData = jenkinsFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'jenkins'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })
  // Get data from netiq files
  const netiqFilesData = netiqFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'netiq'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })
  // Get data from sonarqube files
  const sonarqubeFilesData =sonarqubeFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'sonarqube'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })
  // Get data from vmware files
  const vmwareFilesData = vmwareFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'vmware'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })
  // Get data from miscellaneous files
  const miscellaneousFilesData = miscellaneousFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(githubDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'miscellaneous'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Concatenate each articles data in one array
  const allPostsData = axwayFilesData.concat(azureFilesData).concat(cloudflareFilesData).concat(githubFilesData);
  
  // Sort articles by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
} // END - getSortedPostsData()

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory
  const axwayFileNames = fs.readdirSync(axwayDirectory)
  const azureFileNames = fs.readdirSync(azureDirectory)
  const cloudflareFileNames = fs.readdirSync(cloudflareDirectory)
  const githubFileNames = fs.readdirSync(githubDirectory)

  // Holds all [category] names 
  let categoryNames = [];

  // Loop through each xxxFileNames array. 
  // Add relevant category name to categoryNames array
  axwayFileNames.forEach(function(axwayFileName) {
    categoryNames.push(axwayCategory);
  })
  azureFileNames.forEach(function(azureFileName) {
    categoryNames.push(azureCategory);
  })
  cloudflareFileNames.forEach(function(cloudflareFileName) {
    categoryNames.push(cloudflareCategory);
  })
  githubFileNames.forEach(function(githubFileName) {
    categoryNames.push(githubCategory);
  })
  
  // Concatenate each articles name in one array (id)
  const fileNames = axwayFileNames.concat(azureFileNames).concat(cloudflareFileNames).concat(githubFileNames);

  // Combine categoryNames & fileNames arrays. [{ categoryName: 'azure', id: 'azure-1.md' }, etc]
  const postParams = categoryNames.map(function(e,i){return{categoryName:e,id:fileNames[i]}});
  
  // Loop through postParams. Output variable params
  return postParams.map(postParam => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id.replace(/\.md$/, '')
      }
    }
  })

}

// Get relevant post data
export async function getPostData(category ,id) {
    // Set the relevant /posts file path using category and id in the query params    
    const fullPath = path.join(postsDirectory, `${category}`, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    console.log(matterResult);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
    
}