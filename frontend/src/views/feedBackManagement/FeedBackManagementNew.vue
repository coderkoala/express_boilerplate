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
                  <label for="clientReference" class="col-4 col-form-label">Feedback From</label>
                  <div class="col-12">
                    <select id="clientReference" name="clientReference" class="custom-select">
                      <option value="0">-</option>
                      <option value="1">...</option>
                      <option value="2">...</option>
                      <option value="3">...</option>
                      <option value="4">...</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="awbNumber" class="col-4 col-form-label">AWB Reference No.</label>
                  <div class="col-12">
                    <input id="awbNumber" name="awbNumber" type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="feedbackBy" class="col-4 col-form-label">Feedback By</label>
                  <div class="col-12">
                    <input id="feedbackBy" name="feedbackBy" type="text" class="form-control" />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="dateFiled" class="col-4 col-form-label">Date Feedback was supplied</label>
                  <div class="col-12">
                    <input id="dateFiled" name="dateFiled" type="date" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="details" class="col-4 col-form-label">Feedback Minutes (Details)</label>
              <div class="col-12">
                <textarea id="details" name="details" cols="40" rows="5" class="form-control"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="remarks" class="col-4 col-form-label">Feedback Remarks (Internal Memo)</label>
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
  };
</script>
