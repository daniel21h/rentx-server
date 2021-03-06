import { hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';

import createConnection from '@shared/infra/typeorm';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuid();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "is_admin", created_at, driver_license)
    values('${id}', 'Admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'xxxxx')
    `,
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));
