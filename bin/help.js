module.exports = `
	Usage
	  $ blog [title] [options]

	Options
    --description Add a description for the post
    --draft, -d  Create a draft post
    --featured, -f Create a featured post
    --hero, -i Add hero image for the post
    --keywords, -k Add keywords for SEO
    --tags, -t Add tags

	Examples
	  $ blog our new blog post! --draft -f --keywords=new keyword important --tags=category organization -s="A small summary for this post"
`
