exports.getHome = (req, res, next) => {
	res.render('blog');
};
exports.getProblems = (req,res,next) => {
	res.render('problems');
}
exports.getNewProblem = (req,res, next) => {
	res.render('problemPost');
}
exports.getNewBlog = (req,res, next) => {
	res.render('blogCreate');
}
exports.getProblem = (req,res,next) => {
	res.render('viewProblem');
}
exports.getPost = (req,res, next) => {
	res.render('viewBlog');
}