<template>
  <div>
    <CCard>
      <CCardHeader> Add New Customer </CCardHeader>
      <CCardBody>
        <CRow class="container">
          <form>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="clientGroup" class="col-4 col-form-label">Client Group</label>
                  <div class="col-12">
                    <select id="clientGroup" name="clientGroup" class="custom-select">
                      <option value="0">Airplanes</option>
                      <option value="1">Consultant</option>
                      <option value="2">Exporter</option>
                      <option value="3">General Goods</option>
                      <option value="4">General Customers</option>
                      <option value="5">Importer</option>
                      <option value="6">Oversea Agent</option>
                      <option value="7">Staff</option>
                      <option value="8">Supplier</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="companyName" class="col-4 col-form-label">Company Name</label>
                  <div class="col-12">
                    <input id="companyName" name="companyName" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="contactPerson" class="col-4 col-form-label">Contact Person</label>
                  <div class="col-12">
                    <input id="contactPerson" name="contactPerson" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="jobTitle" class="col-4 col-form-label">Job Title</label>
                  <div class="col-12">
                    <input id="jobTitle" name="jobTitle" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="country" class="col-4 col-form-label">Country</label>
                  <div class="col-12">
                    <input id="country" name="country" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="city" class="col-4 col-form-label">City</label>
                  <div class="col-12">
                    <input id="city" name="city" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="zipCode" class="col-4 col-form-label">Zip Code</label>
                  <div class="col-12">
                    <input id="zipCode" name="zipCode" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="fax" class="col-4 col-form-label">Fax</label>
                  <div class="col-12">
                    <input id="fax" name="fax" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="text" class="col-4 col-form-label">Email</label>
                  <div class="col-12">
                    <input id="text" name="text" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="website" class="col-4 col-form-label">Website</label>
                  <div class="col-12">
                    <input id="website" name="website" type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group row">
                  <label for="state" class="col-4 col-form-label">State</label>
                  <div class="col-12">
                    <input id="state" name="state" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="address" class="col-4 col-form-label">Address (Exclude Above)</label>
                  <div class="col-12">
                    <textarea id="address" name="address" cols="40" rows="5" class="form-control"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="telephonePrimary" class="col-4 col-form-label">Telephone Number Primary</label>
                  <div class="col-12">
                    <input id="telephonePrimary" name="telephonePrimary" type="text" class="form-control" />
                  </div>  
                </div>
                <div class="form-group row">
                  <label for="telephoneSecondary" class="col-4 col-form-label">Telephone Number Secondary</label>
                  <div class="col-12">
                    <input id="telephoneSecondary" name="telephoneSecondary" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="mobileNumber" class="col-4 col-form-label">Mobile Number</label>
                  <div class="col-12">
                    <input id="mobileNumber" name="mobileNumber" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-4">Shipping Address?</label>
                  <div class="col-12">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input name="shippingFlag" id="shippingFlag_0" type="radio" class="custom-control-input" value="true" />
                      <label for="shippingFlag_0" class="custom-control-label">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input name="shippingFlag" id="shippingFlag_1" type="radio" class="custom-control-input" value="false" />
                      <label for="shippingFlag_1" class="custom-control-label">No</label>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-4">Client?</label>
                  <div class="col-12">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input name="clientFlag" id="clientFlag_0" type="radio" class="custom-control-input" value="true" />
                      <label for="clientFlag_0" class="custom-control-label">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input name="clientFlag" id="clientFlag_1" type="radio" class="custom-control-input" value="false" />
                      <label for="clientFlag_1" class="custom-control-label">No</label>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="files" class="col-4 col-form-label">Files</label>
                  <div class="col-12">
                    <input id="files" name="files" type="text" class="form-control" />
                  </div>
                </div>
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
