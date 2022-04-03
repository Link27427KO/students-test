import { FC } from 'react'
import StatusButton, { StatusButtonEnum } from '../../../components/StatusButton'

const TestStudentDescription: FC = () => {
  return (
    <div className="helper-div-excepted">
      <div className="helper-div-accuracy">
        <div className="helper-div-accuracy-score">SCORE</div>
        <div className="helper-div-accuracy-accuracy-blue">
          <StatusButton status={StatusButtonEnum.blue} />
          90%+ ACCURACY
        </div>
        <div className="helper-div-accuracy-accuracy-green">
          <StatusButton status={StatusButtonEnum.green} />
          80-90% ACCURACY
        </div>
        <div className="helper-div-accuracy-accuracy-yellow">
          <StatusButton status={StatusButtonEnum.yellow} />
          50-79% ACCURACY
        </div>
        <div className="helper-div-accuracy-accuracy-red">
          <StatusButton status={StatusButtonEnum.red} />
          BELOW 50% ACCURACY
        </div>
      </div>
      <div className="helper-div-excepted-excepted">
        <div className="helper-div-excepted-excepted-speed">SPEED</div>
        <div className="helper-div-excepted-excepted-blue">
          <StatusButton status={StatusButtonEnum.blue} />
          ABOVE EXCEPTED
        </div>
        <div className="helper-div-excepted-excepted-green">
          <StatusButton status={StatusButtonEnum.green} />
          AS EXCEPTED
        </div>
        <div className="helper-div-excepted-excepted-red">
          <StatusButton status={StatusButtonEnum.red} />
          BELOW EXPECTED
        </div>
      </div>
    </div>
  )
}

export default TestStudentDescription
