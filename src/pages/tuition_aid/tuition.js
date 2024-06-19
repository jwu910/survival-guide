import './tuition.css';
import tuitionImg from '../../images/tuitionAid.png';
import flag from '../../images/US.png';

const Tuition = () => {
  return (
    <div className="border">
      <div className="container">
        <div className="imgs">
          <img src={tuitionImg} alt="tuitionAid" className="mainImg" />
          <img src={flag} alt="USflag" className="flag" />
        </div>
        <div className="content">
          <h1>Tuition Aid</h1>
          <p>
            Applying to colleges and universities can be fun, like choosing your one-stop boba shop. You try all these
            different flavors by visiting the shop and meeting the people and staff, you find out the pros and cons of
            each drink and environment, but one thing will always be the ultimate decision of choosing your forever boba
            spot, the cost.
          </p>
          <p>
            And like a boba shop, colleges and universities have the same restrictions. Thankfully, there are
            opportunities that can help relieve the financial struggle that comes with choosing higher education. But
            each system is different, making the overall process very confusing for any student when applying for
            financial aid. We will review the different ways to apply for financial aid in North America.
          </p>

          <h2>College in US</h2>
          <p>
            For a college student in the United States, there will always be one go-to method for financial aid, which
            is the Free Application for Federal Student Aid, otherwise known as FAFSA (College Board, 2023). The FAFSA
            form is a type of financial aid that students request from the federal government. Think of it as a loan,
            you ask the government for a certain amount of money to pay off your schooling, and in return, they expect
            you to pay off that loan after you graduate or when you leave school, in order to give you enough time to
            find a source of income to pay off those pesky expenses, this is known as the student loan repayment plan
            (Federal Student Aid, 2023).
          </p>
          <p>
            To get started with this process, the Federal Student Aid Department strongly encourages students to create
            an account, or their FSA ID, as soon as possible. You will also need to gather all of those important
            documents such as your Social Security Number and even tax forms. Tax forms are located on Federal Student
            Aid’s website and their step-by-step guide of “Filling Out the FAFSA Form” (2023).
          </p>
          <p>
            <b>How to Fill Out the Free Application for Federal Student Aid (FAFSA®) Form</b>
          </p>
          <p>
            For those thinking about staying local or in your own state for school, State Financial Aid Programs provide
            financial assistance to student’s in their state. These State Aid Programs are grants and scholarships where
            students can receive money from their state and are not expected to pay it back.
          </p>
          <p>
            Usually, this list is only applicable to students who are attending an in-state academic institution, but on
            rare occasions, some states may provide aid for those who are looking to go elsewhere. To find deadlines and
            state-related details, check out the National Association of Student Financial Aid Administrators, or the
            NASFAA, as they have an interactive description of each state’s programs (2023).
          </p>

          <h2>Scholarship</h2>
          <p>
            Scholarships are another way one can earn financial support for college without paying that money back! It
            is a “fan favorite” among many students because there are so many opportunities to earn money! But that also
            means for some students who are applying for certain scholarships, it can be much harder to win.
            Scholarships can be filtered so that it isn’t a “free-for-all”, and you can tell your own unique story to
            the judges. Similar to the State Aid Programs, scholarships can target a specific audience allowing each
            voice to shine, versus getting drowned out.
          </p>
          <p>
            Unfortunately, an essential element of scholarships is submitting essays. This may be a thrill for some, but
            for others, it can just be daunting and downright discouraging. There is no way around this as the
            “No-Essay“ scholarships are usually a waste of time, and the ones that seem “too good to be true” are
            exactly that, a scam not to be clicked on. But don’t give up yet! There is always a chance to win by telling
            your story, as there may be somebody out there who thinks you deserve the scholarship for being relatable,
            valuable, or even inspirational. Our biggest tip is to find scholarship applications that are similar to
            those previously submitted so that you can add a few tweaks, and it’s like a brand new essay for new
            readers.
          </p>

          <h3>Where to find scholarships:</h3>
          <ol>
            <li>
              <a
                href="https://bigfuture.collegeboard.org/pay-for-college/scholarship-search"
                target="_blank"
                rel="noreferrer"
              >
                College Board
              </a>
            </li>
            <li>
              <a href="https://www.fastweb.com/" target="_blank" rel="noreferrer">
                Fastweb
              </a>
            </li>
            <li>
              <a href="https://www.petersons.com/scholarship-search.aspx" target="_blank" rel="noreferrer">
                Peterson’s
              </a>
            </li>
            <li>
              <a href="https://www.chegg.com/scholarships" target="_blank" rel="noreferrer">
                Chegg Colleges
              </a>
            </li>
            <li>
              <a href="https://www.scholarships.com/" target="_blank" rel="noreferrer">
                Scholarships.com
              </a>
            </li>
          </ol>
          <p>
            Scholarships can also be earned via one’s high school or expected college or university. These academic
            institutions want to see their students grow more than anyone, and providing the best financial chances at
            no cost can be a lifesaver for many students. But keep in mind the deadlines, as scholarships will be due
            right around college applications, so time management and organization will be key when handling all of
            these documents.
          </p>

          <h3>References</h3>
          <ul>
            <li>
              College Board. (2023, February). What is the FAFSA? Collegeboard.org.
              <a href="https://blog.collegeboard.org/what-is-the-fafsa" target="_blank" rel="noreferrer">
                https://blog.collegeboard.org/what-is-the-fafsa
              </a>
            </li>
            <li>
              Federal Student Aid. (2023). Filling Out the FAFSA Form. Studentaid.gov.
              <a href="https://studentaid.gov/apply-for-aid/fafsa/filling-out" target="_blank" rel="noreferrer">
                https://studentaid.gov/apply-for-aid/fafsa/filling-out
              </a>
            </li>
            <li>
              Federal Student Aid. (2023). Student Loan Repayment. Studentaid.gov.
              <a href="https://studentaid.gov/manage-loans/repayment#repayment-plans" target="_blank" rel="noreferrer">
                https://studentaid.gov/manage-loans/repayment#repayment-plans
              </a>
            </li>
            <li>
              Government of Canada. (2022). Canada Student Grants and Loans - Apply with your province or territory.
              Canada.ca.
              <a
                href="https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans/province-apply.html"
                target="_blank"
                rel="noreferrer"
              >
                https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans/province-apply.html
              </a>
            </li>
            <li>
              Government of Canada. (2022). Canada Student Grants and Loans - What student grants and loans offer.
              Canada.ca.
              <a
                href="https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html"
                target="_blank"
                rel="noreferrer"
              >
                https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html
              </a>
            </li>
            <li>
              National Association of Student Financial Aid Administrators. (2023). State Financial Aid Programs.
              Nasfaa.org.
              <a href="https://www.nasfaa.org/State_Financial_Aid_Programs" target="_blank" rel="noreferrer">
                https://www.nasfaa.org/State_Financial_Aid_Programs
              </a>
            </li>
            <li>
              StudentAid BC. (2022). How to apply for a loan. Studentaidbc.ca.
              <a href="https://studentaidbc.ca/apply/how-to-apply" target="_blank" rel="noreferrer">
                https://studentaidbc.ca/apply/how-to-apply
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
