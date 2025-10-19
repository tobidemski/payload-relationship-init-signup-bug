import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: () => true,
    update: () => true,
    admin: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'mycollectionrelationship',
      type: 'relationship',
      relationTo: 'mycollection',
      access: {
        read: () => true,
        update: () => true,
        create: () => true,
      },
    },
    {
      type: 'text',
      name: 'seeded-data-text',
      admin: {
        readOnly: true,
        components: {
          Cell: '@/fields/seededData#SeededData',
          Field: '@/fields/seededData#SeededData',
        },
      },
    },
  ],
}
