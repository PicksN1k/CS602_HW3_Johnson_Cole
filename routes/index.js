router.get('/random', async function(req, res) {

  let result = await courseDB.getRandomCourse();

  res.render('randomView', result);

});

router.get('/describe/:id', async function(req, res) {

  let id = req.params.id;
  let result = await courseDB.getCourseDescription(id);

  if (!req.session.sessionData['courseDescrition'].includes(id))
      req.session.sessionData['courseDescrition'].push(id);

  res.render('descriptionView', result);

});


router.get('/coordinator/:id', async function(req, res) {

  let id = req.params.id;
  let result = await courseDB.lookupByCoordinator(id);

  if (!req.session.sessionData['lookupByCoordinator'].includes(id))
      req.session.sessionData['lookupByCoordinator'].push(id);

  res.render('lookupByCoordinatorView', result);

});
  
router.get('/history', function(req, res) {

  res.render('historyView', {
    history: req.session.sessionData
  });

});

export {router};