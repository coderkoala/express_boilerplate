<template>
  <div>
    <CCard>
      <CCardHeader>FeedBack Management</CCardHeader>
      <CCardBody>
        <CRow class="container">
          <form>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="taskName" class="col-4 col-form-label">Task Name</label>
                  <div class="col-12">
                    <input id="taskName" name="taskName" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="dueDate" class="col-4 col-form-label">Due Date</label>
                  <div class="col-12">
                    <input id="dueDate" name="dueDate" type="date" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="recurring" class="col-4 col-form-label">Recurring?</label>
                  <div class="col-12">
                    <select class="form-control" name="recurring" id="recurring" v-model="message">
                      <option value="no" selected>No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="dateFiled" class="col-4 col-form-label">Assigned</label>
                  <div class="col-12">
                    <input id="dateFiled" name="dateFiled" type="date" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="assingedTo" class="col-4 col-form-label">Assigned To</label>
                  <div class="col-12">
                    <input id="assingedTo" name="assingedTo" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row" v-if="'yes' === message">
                  <label for="Interval" class="col-4 col-form-label">Interval</label>
                  <div class="col-12">
                    <select class="form-control" name="Interval" id="Interval">
                      <option selected>Select Interval for task reassignment</option>
                      <option value="0">Daily</option>
                      <option value="1">Weekly</option>
                      <option value="1">Fortnightly</option>
                      <option value="1">Monthly</option>
                      <option value="1">Tri-Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row" v-if="'yes' === message">
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="dateFrom" class="col-4 col-form-label">From</label>
                  <div class="col-12">
                    <input id="dateFrom" name="dateFrom" type="date" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="dateTo" class="col-4 col-form-label">To</label>
                  <div class="col-12">
                    <input id="dateTo" name="dateTo" type="date" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="details" class="col-4 col-form-label">Task Minutes (Details)</label>
              <div class="col-12">
                <textarea id="details" name="details" cols="40" rows="5" class="form-control"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="remarks" class="col-4 col-form-label">Task Remarks</label>
              <div class="col-12">
                <input id="remarks" name="remarks" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-12">
                <button name="submit" type="submit" class="btn btn-primary">
                  Submit</button
                >&nbsp;
                <button name="submit" type="submit" class="btn btn-secondary">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
  export default {
    name: 'CustomerAddNew',
    data() {
      return {
        message: 'no',
      };
    },
  };
</script>
