import * as FaIcons from 'react-icons/fa';

function Cards (){
    return(
        <div className="container-cards-totals">

        <div className="col-md-4 mb-1" id="card-productos-1">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de productos</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">150</div>
										</div>
										<div className="col-auto">
                                        <FaIcons.FaBoxes className='me-2'/>
										</div>
									</div>
								</div>
							</div>
		</div>

        <div className="col-md-4 mb-1" id="card-productos-2">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total de usuarios</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
										</div>
										<div className="col-auto">
                                        <FaIcons.FaUsers className='me-2'/>
										</div>
									</div>
								</div>
							</div>
		</div>

        <div className="col-md-4 mb-1" id="card-productos-3">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de categorias</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
										</div>
										<div className="col-auto">
                                        <FaIcons.FaLayerGroup className='me-2'/>
										</div>
									</div>
								</div>
							</div>
		</div>

        </div>
    )
}

export default Cards;