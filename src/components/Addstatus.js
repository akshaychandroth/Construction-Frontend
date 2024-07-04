import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../css/bootstrap/css/bootstrap.css'
import '../css/bootstrap/css/style.css'

function Addstatus() {

    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light pb-0 mb-0">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={require("../img/logowhite.png")} width="55" height="55"/>
              </a>
          </div>
        </nav>
        <div class="container-fluid p-2">
          <div class="row mb-2">
                <div class=" col-md-1 col-lg-2"></div>
                <div class=" col-12 col-md-10 col-lg-8">
                <div class="row">
                  <div class=" col-12">
                          <h4 class="mb-2 text-light text-center">Update project status:</h4>
                  </div>
                  <div class="col-12 d-flex justify-content-center px-3 px-md-4">
                    <div class="card border border-success rounded-4 col-10 ">
                      <div class="card-body px-4 py-3 ">
                        <form>
                          <div class="row">
                          <div class="col-6">
                              <label for="projectid" class="form-label p-1">project id</label>
                              <input type="text" class="form-control form-control-sm" placeholder="project id" readOnly=" " id="projectid"/>
                            </div>
                            <div class="col-6">
                              <label for="engid" class="form-label p-1">engineer id</label>
                              <input type="text" class="form-control form-control-sm" placeholder="engineer id" readOnly=" " id="engid"/>
                            </div>
                            <div class="col-6">
                              <label for="status" class="form-label p-1">status</label>
                              <select id="status" class="form-select form-select-sm">
                                <option selected>starting</option>
                                <option>Plan uploaded</option>
                                <option>verified</option>
                                <option>on progress</option>
                                <option>completed</option>
                              </select>
                            </div>
                            <div class="col-12 mt-2 text-center">
                              <button class="btn btn-lg btn-outline-success " type="submit">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" col-md-1 col-lg-2"></div>
            </div>
        </div>


    </div>
  )
}

export default  Addstatus
