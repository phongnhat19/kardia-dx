import { RequestManager, HTTPTransport, Client } from '@open-rpc/client-js';
import KardiaAccount from './account';
import KAIChain from './kai';
import KardiaTransaction from './transaction';

interface KardiaClientProps {
  endpoint: string;
}

class KardiaClient {
  private _rpcClient: Client;
  public account: KardiaAccount;
  public transaction: KardiaTransaction;
  public kaiChain: KAIChain;
  constructor({ endpoint }: KardiaClientProps) {
    // Init RPC client
    const transport = new HTTPTransport(endpoint);
    this._rpcClient = new Client(new RequestManager([transport]));

    // Init sub module
    this.account = new KardiaAccount({ client: this._rpcClient });
    this.transaction = new KardiaTransaction({ client: this._rpcClient });
    this.kaiChain = new KAIChain({ client: this._rpcClient });
  }
}

export {
  KardiaTransaction,
  KardiaAccount,
  KAIChain
}
export default KardiaClient;
