import { type SchemaTypeDefinition } from 'sanity'





import { product } from './product'
import { userSchema } from './userclerk'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,userSchema
  ],
}
