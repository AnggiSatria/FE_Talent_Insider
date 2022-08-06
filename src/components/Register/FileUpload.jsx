import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../Assets/CSS/FileUpload.scss"

const FileUpload = ({files, setFiles}) => {

    const uploadHandler = () => {}

  return (
    <div>
        <div className="file-card">
            <div className="file-input">
                <input type="file" />
                <button>
                  <i>
                    <FontAwesomeIcon icon={faPlus}/>
                  </i>
                  Upload
                </button>
            </div>

            <p className='main'>Support Files</p>
            <p className="info">JPG, PNG, JPEG</p>
        </div>
    </div>
  )
}

export default FileUpload