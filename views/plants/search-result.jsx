import React from 'react'
import Def from '../default';

export default function SearchResult({ user, plantData, query }) {
    const addPlantToProfile = async () => {
        console.log("hello");
    }
    return (
        <Def user={user}>
            <h1>Plant Search Results</h1>
            {plantData && plantData.length > 0 &&
                <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {plantData?.map(plant => {
                        return (
                            <li key={`plant_${plant?.id}`} className='border rounded-lg shadow-lg overflow-hidden'>
                                <div className="w-full h-[230px] overflow-hidden">
                                    <img src={plant?.image_url} alt={plant.common_name || plant.scientific_name || ''} width={1240} height={700} className='w-full h-auto' />
                                </div>
                                <form action='/plants/search/add_plant_to_profile' method='POST' target='_blank' className="p-3">
                                    <h2>{plant.common_name || "Common Name Not Available"}</h2>
                                    <p>Scientific Name: {plant.scientific_name || "Scientific Name Not Available"}</p>
                                    <p>Family: {plant.family || "Family Not Available"}</p>
                                    <p>Genus: {plant.genus || "Genus Not Available"}</p>
                                    {/* # Add more plant data fields as needed */}

                                    <input type="hidden" name="query" value={query} />
                                    <input type="hidden" name="name" value={plant.common_name || plant.scientific_name} />
                                    <input type="hidden" name="isIndoor" value={false} />
                                    <input type="hidden" name="needsLight" value={'_'} />
                                    <input type="hidden" name="needsWater" value={'_'} />
                                    <input type="hidden" name="image" value={plant?.image_url} />

                                    <button type='submit' className="py-1 px-3 bg-blue-600 text-white mt-2" 
                                    onClick="addPlantToProfile()" 
                                    // onClick={() => {
                                    //     alert('Please!')
                                    //     addPlantToProfile()
                                    // }}
                                    >Add to profile</button>
                                </form>
                            </li>
                        )
                    })}
                </ul>
            }
        </Def>
    )
}




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Plant Search Results</title>
// </head>
// <body>
//     <h1>Plant Search Results</h1>
//     <% if (plantData && plantData.length > 0) { %>
//         <ul>
//             <% plantData?.forEach(plant => { %>
//                 <li>
//                     <h2><%= plant.common_name || "Common Name Not Available" %></h2>
//                     <p>Scientific Name: <%= plant.scientific_name || "Scientific Name Not Available" %></p>
//                     <p>Family: <%= plant.family || "Family Not Available" %></p>
//                     <p>Genus: <%= plant.genus || "Genus Not Available" %></p>
//                     # Add more plant data fields as needed
//                 </li>
//             <% }); %>
//         </ul>
//     <% } else { %>
//         <p>No plant data found for your search.</p>
//     <% } %>

//     <a href="/plants">Search Again</a>
// </body>
// </html>
