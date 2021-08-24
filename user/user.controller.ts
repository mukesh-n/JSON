const router = express.Router();


router.get("/entity", async (req, res, next) => {
        try {
          var result: ActionRes<User> = new ActionRes<User>({
            item: new User({}),
          });
          next(result);
        } catch (error) {
          next(error);
        }
      });
router.post("/get", async (req, res, next) => {
  try {
    var result: ActionRes<Array<User>> = new ActionRes<
      Array<@tablename>
    >();
    var service: @tablenameService = new @tablenameService();
    result.item = await service.select(req.body.item);
    next(result);
  } catch (error) {
    next(error);
  }
});
router.post("/insert", async (req, res, next) => {
        try {
          var result: ActionRes<User> = new ActionRes<User>();
          var service: UserService = new UserService();
          result.item = await service.insert(req.body.item);
          next(result);
        } catch (error) {
          next(error);
        }
      });
router.post("/update", async (req, res, next) => {
        try {
          var result: ActionRes<User> = new ActionRes<User>();
          var service: UserService = new UserService();
          result.item = await service.update(req.body.item);
          next(result);
        } catch (error) {
          next(error);
        }
      });
router.post("/delete", async (req, res, next) => {
        try {
          var result: ActionRes<User> = new ActionRes<User>();
          var service: UserService = new UserService();
          result.item = await service.delete(req.body.item);
          next(result);
        } catch (error) {
          next(error);
        }
    });