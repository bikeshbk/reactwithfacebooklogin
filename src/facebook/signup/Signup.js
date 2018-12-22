import React from 'react';

const Signup = () => {
    return(
        <div className="signup-form">
            <h1>Sign Up</h1>
            <span className="slogan">It’s free and always will be.</span>
            <div className="layout">
                <input type="text" class="form-control" name="firstname" id="firstname" placeholder="First name" required/>
                <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Last name" required/>
            </div>
            <div className="layout">
                <input type="text" class="form-control" placeholder="Mobile number or email" required/>
            </div>
            <div className="layout">
                <input type="password" class="form-control" placeholder="New password" required/>
            </div>
            <div>
                <h4>Birthday</h4>
                <span>
                    <select name="birthday_month" id="month" title="Month">
                        <option value="0">Month</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12" selected="1">Dec</option>
                    </select>
                    <select name="birthday_day" id="day" title="Day">
                        <option value="0">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24" selected="1">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select name="birthday_year" id="year" title="Year">
                        <option value="0">Year</option><option value="2018">2018</option>
                        <option value="2017">2017</option><option value="2016">2016</option>
                        <option value="2015">2015</option><option value="2014">2014</option>
                        <option value="2013">2013</option><option value="2012">2012</option>
                        <option value="2011">2011</option><option value="2010">2010</option>
                        <option value="2009">2009</option><option value="2008">2008</option>
                        <option value="2007">2007</option><option value="2006">2006</option>
                        <option value="2005">2005</option><option value="2004">2004</option>
                        <option value="2003">2003</option><option value="2002">2002</option>
                        <option value="2001">2001</option><option value="2000">2000</option>
                        <option value="1999">1999</option><option value="1998">1998</option>
                        <option value="1997">1997</option><option value="1996">1996</option>
                        <option value="1995">1995</option><option value="1994">1994</option>
                        <option value="1993" selected="1">1993</option>
                        <option value="1992">1992</option><option value="1991">1991</option>
                        <option value="1990">1990</option><option value="1989">1989</option>
                    </select>
                </span>
                <div className="why-birthday">
                    Why do I need to provide my birthday?
                    <span class="tooltiptext">
                        Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Data Policy.
                    </span>
                </div>
            </div>
            <div>
                <div class="gender">
                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label for="exampleRadios1">
                        Female
                    </label>
                </div>
                <div class="gender">
                    <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label for="exampleRadios2">
                        Male
                    </label>
                </div>
            </div>
            <div className="policy">
                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
            </div>
                <button type="button" class="btn btn-success signup-button">Sign Up</button>
                <hr/>
                <label className="direction">
                    <span className="create">
                        Create a Page
                    </span> for a celebrity, band or business.
                </label>
        </div>
    );
}

export default Signup;
