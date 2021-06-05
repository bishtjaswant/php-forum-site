
<!-- Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="login-frm">
          <div class="form-group">
            <label for="email">Your Email Address</label>
            <input type="email" id="login_email" required  placeholder="email address" class="form-control" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="login_password" required placeholder="***************" class="form-control" >
          </div>

          <button type="submit" class="btn btn-outline-primary">Login</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

        </form>
      </div>

      <!-- display message from server  -->
      <div  id="modal-footer">
      </div>
    </div>
  </div>
</div>
