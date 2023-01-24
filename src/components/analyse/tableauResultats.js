import {React, useState } from 'react';
import {formatData} from './data'

function TableauResultat(props){
	const lignes =  formatData(props.datasets).optionsReponses.map(function(e, i) {
		return [e, formatData(props.datasets).nReponses[i]];
	  });
    return(<div className='tableResultat'>
		<table class="table table-striped table-bordered
									 table-sm">
			<thead>
				<tr>
					<th> Indices</th>
					<th> Choix Reponses</th>
					<th> Reponses</th>
				</tr>
			</thead>
			<tbody>
            {lignes.map( (ligne,index) => 
                <tr key={ligne[0]}>
					<td> {index +1}</td>
					<td> {ligne[0]}</td>
					<td> {ligne[1]}</td>
				</tr>
                )}
				
			</tbody>
   	</table>
	</div>
    )
}

export {TableauResultat}